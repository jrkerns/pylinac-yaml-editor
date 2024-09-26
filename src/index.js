import * as monaco from 'monaco-editor';

self.MonacoEnvironment = {
	getWorkerUrl: function (moduleId, label) {
		// if (label === 'json') {
		// 	return './json.worker.bundle.js';
		// }
		// if (label === 'css' || label === 'scss' || label === 'less') {
		// 	return './css.worker.bundle.js';
		// }
		// if (label === 'html' || label === 'handlebars' || label === 'razor') {
		// 	return './html.worker.bundle.js';
		// }
		// if (label === 'typescript' || label === 'javascript') {
		// 	return './ts.worker.bundle.js';
		// }
		return './editor.worker.bundle.js';
	}
};

monaco.editor.create(document.getElementById('editor'), {
	value: [
		'from banana import *',
		'',
		'class Monkey:',
		'	# Bananas the monkey can eat.',
		'	capacity = 10',
		'	def eat(self, N):',
		"		'''Make the monkey eat N bananas!'''",
		'		capacity = capacity - N*banana.size',
		'',
		'	def feeding_frenzy(self):',
		'		eat(9.25)',
		'		return "Yum yum"'
	].join('\n'),
	language: 'python'
});