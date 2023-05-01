import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "junior" is now active!');

	const exampleViewProvider = new ExampleViewProvider();
	context.subscriptions.push(
		vscode.window.registerTreeDataProvider('junior.exampleView', exampleViewProvider)
	);

	let disposable = vscode.commands.registerCommand('junior.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from junior!');
	});
	context.subscriptions.push(disposable);
}

class ExampleViewProvider implements vscode.TreeDataProvider<vscode.TreeItem> {
	getTreeItem(element: vscode.TreeItem): vscode.TreeItem {
		return element;
	}

	getChildren(element?: vscode.TreeItem): Thenable<vscode.TreeItem[]> {
		const exampleButton = new vscode.TreeItem('Example Button', vscode.TreeItemCollapsibleState.None);
		exampleButton.iconPath = new vscode.ThemeIcon('play');
		exampleButton.command = {
			command: 'junior.helloWorld',
			title: 'Example Button',
		};
		return Promise.resolve([exampleButton]);
	}
}
