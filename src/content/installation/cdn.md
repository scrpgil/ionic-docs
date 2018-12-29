---
previousText: 'Ionicのインストール'
previousUrl: '/docs/installation/cli'
nextText: '環境設定'
nextUrl: '/docs/installation/environment'
---

# Ionic Packages

<p class="intro" markdown="1">
  Ionicをインストールする方法は、あなたがAngularを使うのか、他のフレームワークを使うのか（もしくは使わないのか）によって変わります。
</p>

## AngularでIonicをつかう

Angularを使うときは、`@ionic/angular`パッケージをインストールしてください。これには、すべてのIonicコンポーネントと、IonicをAngularで使うための機能が含まれています。

## CDNでIonicをつかう

Ionicは、簡単に`<script>`タグを使用してCDNから直接利用することもできます。

CDNをつかってIonic Frameworkにアクセスするためには、[unpkg](https://unpkg.com)を使うことをおすすめします。最新版を入手するには、HTMLファイルの`<head></head>`要素内に`script`タグを追加します。

```javascript
<script src="https://unpkg.com/@ionic/core@latest/dist/ionic.js"></script>
```

これで、何もインストールしなくても、すべてのIonicコンポーネントを利用することができます。

<blockquote>
  <p>
    これはAngularなどフレームワークをインストールしません。`<script>`タグを利用することにより、何もインストールしなくてもIonicコンポーネントを使用できます。
  </p>
</blockquote>


## CDNでIoniconsをつかう

Ionic Frameworkを使用している場合、Ioniconsはデフォルトでパッケージに含まれているので、インストールは不要です。もしIonic FrameworkなしにIoniconsを使う場合は、次の`<script>`のコードを閉じタグ`</body>`の直前に配置します。

```javascript
<script src="https://unpkg.com/ionicons@4.0.0/dist/ionicons.js"></script>
```
