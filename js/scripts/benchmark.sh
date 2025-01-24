#! /bin/bash -eux
hey -c 100 -n 100000 -m GET 'http://localhost:18001/?name=hey' > ./tmp/hey-deno.txt
hey -c 100 -n 100000 -m GET 'http://localhost:18002/?name=hey' > ./tmp/hey-node.txt
hey -c 100 -n 100000 -m GET 'http://localhost:18003/?name=hey' > ./tmp/hey-workerd.txt
hey -c 100 -n 100000 -m GET 'http://localhost:18004/?name=hey' > ./tmp/hey-bun.txt
