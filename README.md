

# Chaucha Trader Pro

Este sitio web está pensado para resolver al dominio chauchatraderpro.cl, y ser alojado dentro de GithubPages.

La ejecución del proceso de publicación en Github Pages es como sigue:


```
git checkout -b gh-pages
git push origin gh-pages
npm install -g angular-cli-ghpages
ng build --prod --base-href https://[username].github.io/[repo]/
ngh --dir=dist/[project-name]
```


Particularmente, se debe ejecutar los siguientes comandos

```
$ ng build --prod --base-href https://panterozo.github.io/chauchatraderpro2/
$ sudo ngh --dir=dist/angular6-sidenav-example/ --no-silent
```

# Publicar en dominio

Para publicar en el dominio chauchatraderpro.cl, ejecutar 

```
$ ng build --prod --base-href https://chauchatraderpro.cl
```



# Angular6SidenavExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

Proyecto clonado desde: https://github.com/only2dhir/angular6-sidenav-example.git

