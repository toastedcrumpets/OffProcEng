loadScripts = function (script_urls, script_callback) {
  var scripts_loaded = 0;
  script_urls.forEach(function(url) {
    var script = document.createElement('script');
    script.onload = function () {
      scripts_loaded++;
      if (scripts_loaded == script_urls.length)
	script_callback();
    };
    script.src = url;
    document.head.appendChild(script);
  });
};

loadScripts([
    "../reveal.js/dist/reveal.js",
    "../reveal.js/plugin/highlight/highlight.js",
    "../reveal.js/plugin/notes/notes.js",
    "../reveal.js/plugin/math/math.js",
    "../reveal.js-menu/menu.js",
],
	function () {
		var revealopts = {
			//This width and height allows printing to pdf at A4 and is slightly widescreen to give the best all round size
			width: 1920,
			height: 1080,
			hash: true,
			plugins: [
				RevealHighlight,
				RevealNotes,
				RevealMath,
				RevealMenu
			],
			menu: {
				hideMissingTitles: false,
				themes: false,
				transitions: false,
				custom: [
					{ title: 'Lectures', icon: '<i class="fa fa-graduation-cap"></i>', src: 'toc.html' },
				],
			},
			math: {
				config: "TeX-AMS_SVG-full",
				tex2jax: {
					inlineMath: [['$', '$'], ['\\(', '\\)']],
					skipTags: ['script', 'noscript', 'style', 'textarea', 'pre']
				},
				TeX: {
					packages: { '[-]': ['require', 'autoload'] },
					extensions: ["cancel.js", "color.js"],
					Macros: {
						bm: ["\\boldsymbol{#1}", 1]
					},
				},
			},
			url: 'https://marcusbannerman.co.uk/OffProcEng',
			view: 'scroll',
		};

	Reveal.initialize(revealopts);
}
);
