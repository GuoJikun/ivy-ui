const demoPlugin = (options, app) => {
    return {
        name: "vuepress-plugin-demo",
        multi: false,
        extendsMarkdown: md => {
            md.use(plugin1);
            console.log(md);
        },
    };
};

module.exports = demoPlugin;
