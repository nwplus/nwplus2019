all: deps

# List all commands
.PHONY: ls
ls:
	@$(MAKE) -pRrq -f $(lastword $(MAKEFILE_LIST)) : 2>/dev/null | awk -v RS= -F: '/^# File/,/^# Finished Make data base/ {if ($$1 !~ "^[#.]") {print $$1}}' | sort | egrep -v -e '^[^[:alnum:]]' -e '^$@$$' | xargs

###############################
#    Project-wide commands    #
###############################

.PHONY: deps
deps:
	@echo Installing web app dependencies...
	@(cd ./web ; yarn install)

.PHONY: test
test:
	@echo Running web app tests...
	@(cd ./web ; yarn test)

.PHONY: lint
lint:
	@echo Linting web app...
	@(cd ./web ; yarn lint)

.PHONY: report-coverage
report-coverage:
	mkdir -p .nyc_output
	cp web/coverage/coverage-final.json .nyc_output/coverage-web.json
	nyc report --reporter=text-lcov > coverage.lcov && codecov

###############################
# Component-specific commands #
###############################

# Builds front-end
.PHONY: build
build:
	@echo Building web app...
	@(rm -rf ./docs/assets/ ; mkdir -p ./docs/assets/ ; cp -r ./web/assets/favicon ./docs/assets/favicon; cd ./web ; yarn build)

# Runs webpack dev server
.PHONY: web
web:
	@echo Starting webpack-dev-server...
	@(cd ./web ; yarn start)

# Runs a simple web serve to test the build static web app
.PHONY: serve
serve:
	@(cd ./web ; yarn serve)
