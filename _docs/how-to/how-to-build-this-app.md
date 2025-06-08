# How to Build This App

`pnpm create next-app@latest s25-w2-props-and-sets`

`cd s25-w2-props-and-sets`

`pnpm dev`

- clear out most of the content of src/app/page.tsx
- add Inter font to layout.tsx
- create tailwind.config.ts
- add Inter classes to tailwind.config.ts
- add 'props & sets' to src/app/page.tsx

## Add shadcn/ui

`npx shadcn@latest init`

`pnpm install clsx tailwind-merge`

- create src/lib/utils.ts with cn utility function
- create components.json config file

## Add shadcn components

`mkdir -p src/app/shadcn`

`npx shadcn@latest add button card badge input`

- create src/app/shadcn/page.tsx with component demos
