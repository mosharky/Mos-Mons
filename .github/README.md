# Mo's Mons' SMP
Under Construction

# Developing
1. Clone the repository's dev branch
2. Drag the local repo into a Prism Launcher instance's `.minecraft` folder
3. Open the `.minecraft` folder with VSCode
4. Run the following commands in the VSCode terminal:
   - ```git update-index --skip-worktree kubejs/config/common.properties```
   - ```git update-index --skip-worktree kubejs/config/client.properties ```

## Using packwiz
The modpack currently uses packwiz to automatically update/distribute the pack on the client.
- [Install packwiz](https://packwiz.infra.link/installation/)
- Run `packwiz refresh` in the VSCode workspace

## Hosting docs locally
- Requires Python/`pip` and VSCode.
- Based on [`mkdocs-material`](https://squidfunk.github.io/mkdocs-material/getting-started/)

Open the repository folder with VSCode and run:

1. ```pip install mkdocs-material```
2. ```mkdocs serve --config-file=.github/docs/mkdocs.yml```