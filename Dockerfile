# Build & Production stage: Bun para todo
FROM oven/bun:alpine AS app
WORKDIR /app

# Instala dependencias del sistema necesarias para sharp
RUN apk add --no-cache libc6-compat

COPY package.json bun.lock ./
RUN bun install

COPY . .

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN bun run build

# Crea usuario no root para producción
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copia archivos necesarios para standalone
# COPY ./public ./public
COPY --chown=nextjs:nodejs ./.next/standalone ./
COPY --chown=nextjs:nodejs ./.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000

CMD ["bun", "server.js"]