# NativeScript Y Angular

Descargar aplicación

```
git clone https://github.com/snkeduar/appConsiss.git
```

construir node_modules

```
npm install
```

> Nota: debe estar dentro del directorio donde se encuentran los archivos del proyecto para que funcione el comando anterior.

Para probar la aplicación en un emulador tiene que cambiar la url de configuración que se encuentra en "src/app/config/config.ts

```
export class Config{
    static apiUrl = "http://192.168.11.21:3800/api/"; // 192.168.11.21 remplazar por la dirección ip donde se encuentra el backend
}
```

**NB:** ejecutar app en emulador
```
tns run android
```

# Problemas

Cualquier duda contactame a: snkeduar@gmail.com
