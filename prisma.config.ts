// prisma.config.ts
import { defineConfig } from 'prisma/config'

export default defineConfig({
  datasource: {
    url: 'postgresql://neondb_owner:npg_2uIO6TgHcWEd@ep-noisy-surf-a4maat0y-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
  }
})
