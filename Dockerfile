# syntax=docker/dockerfile:1
FROM node:24-alpine AS builder
WORKDIR /app
RUN corepack enable

# Dependencies first, so this layer is cached until the lockfile changes
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile

# Source, then a clean build
COPY . .
RUN rm -rf .output .nitro dist && pnpm run build

FROM node:24-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=3000 \
    NITRO_HOST=0.0.0.0 \
    NITRO_PORT=3000
# Numeric IDs (1000 = the image's `node` user) so Kubernetes can verify runAsNonRoot.
COPY --from=builder --chown=1000:1000 /app/.output ./.output
USER 1000:1000
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]