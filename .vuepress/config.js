module.exports = {
	title: 'Academy Handbook',
	description: '',
	base: '/guide/',
	themeConfig: {
		sidebar: [
			{
				title: 'Введение',
				children: [
					'intro.md',
					'english.md',
					'copyright.md',
					'soft-skills.md'
				]
			},
			{
				title: 'Инструменты',
				children: [
					'code-editors.md',
					'command-line.md',
					'git/git.md',
					'git/git-base.md',
					'git/git-advanced.md',
					'git/git-questions.md',
				]
			},
			{
				title: 'Верстка',
				children: [
					'html-css.md',
					'svg.md',
					'bem.md',
					'responsive-web-design.md',
					'mail-markup.md',
					'markup-tasks.md',
				]
			},
			{
				title: 'Программирование',
				children: [
					'javascript.md',
					'jquery.md',
					'jquery-ui.md',
					'builders/npm.md',
					'vue.md',
					'builders/build.md',
					'js-tasks.md',
				]
			},
		]
	}
}