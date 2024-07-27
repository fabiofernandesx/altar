# Full Stack Exercise # 1223

## Frontend

## Instructions

- [ ] Clone the Repository
- [ ] Install the packages (npm install)
- [ ] Run the code

## Dependencies

This code rely on the API, code can be found [https://github.com/fabiofernandesx/altar-backend] (on this repository)

## CI/CD

Part of the CI/CD work is done on this repository. 
A docker image is created at any pull request to the main branch.
This image is also pushed to dockerhub and can be used with this command:
`docker run -p 80:80 -d fabiofernandes/altar-front`

The image is already optimized and can be deployed anywhere like cloud or k8s
