run-dev:
	docker-compose -f docker-compose-dev.yml up
build-dev:
	cd client && $(MAKE) build-dev
	cd server && $(MAKE) build
	
run-local:
	docker-compose -f docker-compose-production.yml up -d
build-local:
	cd client && $(MAKE) build-local
	cd server && $(MAKE) build
	
run-production:
	docker-compose -f docker-compose-production.yml up -d
build-production:
	cd client && $(MAKE) build-production
	cd server && $(MAKE) build

	