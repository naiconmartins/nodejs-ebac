{ pkgs, ... }: {

  # Enable previews and customize configuration
  idx.previews = {
    enable = true;
    previews = [
      {
        command = [
          "node"
          "index.js"
        ];
        id = "web";
        manager = "web";
      }
    ];
  };
}
