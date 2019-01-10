# DevFest Theme Hugo

DevFest Theme Hugo is a theme for conferences/events.

## Building my conference site from scratch

1. Install [Hugo](https://gohugo.io)
2. Create a new site by running:

```bash
hugo new site my-conf
cd my-conf
mkdir themes
git submodule add https://github.com/GDGToulouse/devfest-theme-hugo.git themes/devfest-theme-hugo
```

3. Then edit your `config.toml` file with

```toml
# ...
theme = "devfest-theme-hugo00b0f0"
# ...
``` 


4. It's done. Just start Hugo server to see it live!

```bash
hugo server 
```

## Customizing the site

### Site params


```toml
#...
googleAnalytics = "XXX"

[params]
    favicon = "/images/favicon.ico"
    themeColor = "#673ab7"
    title = "DevFest Toulouse 2019"
    date = "2019-10-03"
    description = ""
    email = "contact@devfesttoulouse.fr"
    keywords = "event, gdg, gde, devfest, google, programming, android, chrome, developers, web, cloud, androiddev"

[params.logos]
    header = "/images/logo.svg"
    footer = "/images/logo-monochrome.svg"


[[params.menus]]
    name = "Accueil"
    url = "/"

[[params.menus]]
    name = "Partners"
    url = "/partners"

[[params.menus]]
    name = "Sessions"
    url = "/talks/"

[[params.menus]]
    name = "Speakers"
    url = "/speakers/"

[[params.menus]]
    name = "Équipe"
    url = "/team/"

[[params.menus]]
    name = "Blog"
    url = "/blog/"

[[params.menus]]
    name = "FAQ"
    url = "/faq/"

[[params.menus]]
    name = "Jobs"
    url = "https://jobs.devfesttoulouse.fr/"


[taxonomies]
  tag = "tags"
#...
```

### TODO Footer

### TODO Team

### TODO Partners

### TODO Speakers

### TODO Sessions

### TODO Schedule

### TODO Blog

### TODO FAQ

### TODO Code of Conduct


## License

MIT, see [LICENSE](https://github.com/jweslley/hugo-conference/blob/master/LICENSE).
