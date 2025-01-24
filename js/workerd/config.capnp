using Workerd = import "/workerd/workerd.capnp";

const config :Workerd.Config = (
  services = [
    (name = "main", worker = .mainWorker),
    # allow local network access for testing
    (name = "internet", network = (allow = ["public", "local"]))
  ],

  sockets = [
    ( name = "http",
      address = "*:18003",
      http = (),
      service = "main"
    ),
  ]
);

const mainWorker :Workerd.Worker = (
  compatibilityDate = "2024-11-11",
  modules = [
    ( name = "worker.mjs", esModule = embed "worker.mjs" ),
  ],
);