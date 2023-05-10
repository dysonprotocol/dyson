#
# Used for running hermes in docker containers
#
# Usage:
#   docker build . dyson/hermes:test 


FROM informalsystems/hermes:1.4.0

USER root
WORKDIR /root

RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
RUN update-ca-certificates


WORKDIR /home/hermes
USER hermes:hermes
ENTRYPOINT ["/usr/bin/hermes"]

