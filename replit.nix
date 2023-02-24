{ pkgs }: {
  deps = [
    pkgs.nodejs-16_x
    pkgs.python39Packages.pip
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server
  ];
}