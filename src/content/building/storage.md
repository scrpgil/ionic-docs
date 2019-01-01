
# Storage

<p class="intro">Storageは、keyとvalueのセットで簡単に保存できる方法で、JSON objectsも使えます。
Storageは、さまざまなストレージエンジンを利用することができ、プラットフォームに応じて利用可能な
最も適したものを選びます。</p>

ネイティブアプリとしてアプリケーションを実行する場合、Storageは最も安定して広く使用されているファイルベースの
データベースの1つであるSQLiteを使用することを優先し、
ディスク容量が少ない状況では落とし穴となるlocalstorageや
IndexedDBといったストレートエンジンを避けます。

WebまたはProgressive Web Appとして実行している場合、StorageはIndexedDB、WebSQL、
localstorageの順に使用しようとします。


## 使い方


SQLiteを使いたい場合は、cordova-sqlite-storageプラグインをインストールしてください。
```bash
ionic cordova plugin add cordova-sqlite-storage
```

パッケージをインストールします（Ionic v1以上のバージョンのIonicアプリで利用ください）。
```bash
npm install --save @ionic/storage
```

`NgModule` デコレーターに追加します (例えば`src/app/app.module.ts`に追加ください):

```typescript
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    // ...
  ],
  providers: [
    // ...
  ]
})
export class AppModule {}
```

最後に、ComponentやPageにStorageを挿入します。
```typescript
import { Storage } from '@ionic/storage';

export class MyApp {
  constructor(private storage: Storage) { }

  ...

  // set a key/value
  storage.set('name', 'Max');

  // Or to get a key/value pair
  storage.get('age').then((val) => {
    console.log('Your age is', val);
  });
}
```


### Storageの設定

The Storage engine can be configured both with specific storage engine priorities, or custom configuration
options to pass to localForage. See the localForage config docs for possible options: https://github.com/localForage/localForage#configuration

Note: どのカスタム設定も、デフォルトの設定と統合されます

```typescript
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [...],
  imports: [
    IonicStorageModule.forRoot({
      name: '__mydb',
driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [...],
  entryComponents: [...],
   providers: [...]
})
export class AppModule { }
```


## Instance Members


### constructor

Create a new Storage instance using the order of drivers and any additional config
options to pass to LocalForage.

Possible driver options are: ['sqlite', 'indexeddb', 'websql', 'localstorage'] and the
default is that exact ordering.

<br><br>






### driver

Get the name of the driver being used.


<br><br>



### clear()
Clear the entire key value store. WARNING: HOT!

__Returns:__ Returns a promise that resolves when the store is cleared




<br><br>



### forEach()
Iterate through each key,value pair.

__Returns:__ Returns a promise that resolves when the iteration has finished.




<h4>Parameters</h4>
<dl><dt><h5>iteratorCallback</h5></dt><dd>a callback of the form (value, key, iterationNumber)</dd></dl><br><br>



### get()
Get the value associated with the given key.

__Returns:__ Returns a promise with the value of the given key




<h4>Parameters</h4>
<dl><dt><h5>key</h5><strong>Type:</strong> <code>string</code></dt><dd>the key to identify this value</dd></dl><br><br>



### keys()


__Returns:__ Returns a promise that resolves with the keys in the store.




<br><br>



### length()


__Returns:__ Returns a promise that resolves with the number of keys stored.




<br><br>



### ready()
Reflect the readiness of the store.

__Returns:__ Returns a promise that resolves when the store is ready




<br><br>



### remove()
Remove any value associated with this key.

__Returns:__ Returns a promise that resolves when the value is removed




<h4>Parameters</h4>
<dl><dt><h5>key</h5><strong>Type:</strong> <code>string</code></dt><dd>the key to identify this value</dd></dl><br><br>



### set()
Set the value for the given key.

__Returns:__ Returns a promise that resolves when the key and value are set




<h4>Parameters</h4>
<dl><dt><h5>key</h5><strong>Type:</strong> <code>string</code></dt><dd>the key to identify this value</dd><dt><h5>value</h5><strong>Type:</strong> <code>any</code></dt><dd>the value for this key</dd></dl><br><br>
