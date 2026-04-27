pour lancer le serv :
```
npm run dev
```


## Rangement du projet

l'app principale se trouve dans App.tsx

cette app appelle tous le sfichiers pour te faire une belle page

dans app tu trouvera :
```
return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Creative />
        <Skills />
        <Contact />
      </main>
    </>
  );

```

ca veut simplement dire que ton app appelle les fonction : Header / Home / ABout / Projects / Creative / Skills / Contact

Ces fonctions se trouvent dans leurs fichiers respectifs nommé de la meme facon que le nom de la fonction.
Pour chaque fonction tu pourras trouver :

- Du javascript en premier lieu
- un 'return' qui retourne DU HTML
- ainsi qu'un CSS qui porte le meme nom que la fonction/fichier 
