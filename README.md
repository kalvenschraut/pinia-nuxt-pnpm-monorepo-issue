To see issue do
```shell
pnpm install
pnpm --filter website1 run dev
```

can then downgrade @pinia/nuxt to 0.5.5 and run same commands to see it working
```shell
pnpm update @pinia/nuxt@0.5.5 -r
pnpm --filter website1 run dev
```
