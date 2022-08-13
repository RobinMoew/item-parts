1. Run `docker compose up`
2. Run `docker compose exec php sh` -> `yarn install` -> `yarn encore dev --watch`
3. Open [https://localhost](https://localhost) and [accept the auto-generated TLS certificate](https://stackoverflow.com/a/15076602/1352334)
4. Run `docker compose down --remove-orphans` to stop the Docker containers.
