FROM node:20-alpine AS base
WORKDIR /nextJs 
 
# ---------- Dependencies ----------
FROM base AS deps
WORKDIR /nextJs
COPY nextJs/package*.json ./
RUN ls -la
RUN npm install
# ---------- Build ----------
FROM base AS build
WORKDIR /nextJs


COPY --from=deps /nextJs/node_modules ./node_modules


COPY /nextJs .


RUN npm run build

# ENV NODE_ENV=production


EXPOSE 3000


CMD ["npm", "run", "start"]
