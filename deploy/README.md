# deploy/

Kubernetes manifests for website, deployed by Argo CD from the `deploy` branch of this repo
(registered in code-immortal/infrastructure `gitops/workloads/website.yaml`).

Release flow (trunk-based):
1. Work on short feature branches, merge to `main`. Nothing deploys from `main`.
2. Tag a release on `main`: `git tag v1.2.3 && git push origin v1.2.3`.
3. `.github/workflows/release.yaml` builds `ghcr.io/code-immortal/website:v1.2.3`, copies `deploy/` from the tag to the
   `deploy` branch with that image tag, and pushes. Argo CD deploys it within ~3 minutes.

Rollback: revert the release commit on the `deploy` branch (or push an older tag again with a new
patch version). Never commit to `deploy` by hand otherwise; it is rebuilt from `main` on each release.

The host name is set by the platform (`<subdomain>.<domain>`); the one in httproute.yaml is a placeholder.
Namespace, its labels and the backup credentials (Secret `cnpg-s3`) are provided by the platform too.
