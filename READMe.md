## React native boilerplate

### Base structure

- [Feature responsability - Article](https://ramonprata.medium.com/react-controle-de-estado-vamos-organizar-a065e0f5e82c)
- [Feature responsability - GitHub](https://github.com/ramonprata/structure_react_redux_app)


### Base Architecture - New version state management state agnostic(redux tool kit, zustand, etc)

![](https://github.com/ramonprata/structure_react_redux_app/blob/master/imagesReadme/feature-zoom-in.PNG?raw=true)

### Base Architecture - old with redux

![](https://github.com/ramonprata/structure_react_redux_app/blob/master/imagesReadme/structure.png?raw=true)

- **Changes**

  - FeatureService: **FeatureRepository**

- **src**

  - **folders**

    ![](public/images/structureCollapsed.PNG)

  - **feature detail**

    ![](public/images/srcFeatureDetails.PNG)

  - **shared detail**

    ![](public/images/srcSharedDetails.PNG)

- **lint/formatter**
  - `.prettierrc.json`
  - `.eslintrc.json`
- **package.json**
  - **optional dependencies**
    - styled-components
  - **optional devDependencies**
    - @types/styled-components-react-native
- **.vscode**

  - `react-native-ts.code-snippets`
  - `settings.json`

- **Descriptions**

  - Each file describes its own purpose

    - _e.g_ `FooActions`

      ![](public/images/actionsDesc.PNG)

    - _e.g_ `FooRepository`

      ![](public/images/repositoryDesc.PNG)
