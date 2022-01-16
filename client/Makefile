build-dev:
	docker build -t mern-client .
build-local:
	docker build \
	 -t mern-client-production:local \
	 --build-arg CADDYFILE="Caddyfile.local" \
	 --build-arg BASE_URL=http://localhost:5000/api \
	 -f Dockerfile.production .
build-production:
	docker build \
	 -t mern-client-production:production \
	 --build-arg CADDYFILE="Caddyfile.production" \
	 --build-arg BASE_URL=https://duszmo.hu/api \
	 -f Dockerfile.production .