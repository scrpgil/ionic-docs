---
previousText: '環境設定'
previousUrl: '/docs/installation/environment'
nextText: 'Androidセットアップ'
nextUrl: '/docs/installation/android'
---

# iOSセットアップ

<p class="intro" markdown="1">
iOSアプリを開発するためには、追加の環境設定が必要です。残念ながら、iOSアプリはmacOSでしか作成することはできません。
</p>

## Xcode

<a href="https://developer.apple.com/xcode/" target="_blank">Xcode</a>は、ネイティブiOSアプリを作成するためのIDEです。iOS SDKとXcodeのコマンドラインツールが含まれています。XcodeはApple accountで無料で<a href="https://developer.apple.com/download/" target="_blank">ダウンロード</a>できます。App Storeからもインストールできます。

<blockquote>
  <p>XCode 9を使うことをお勧めします。CordovaのXcode 10対応はまだ進行中です。詳しくは<a href="https://github.com/apache/cordova-ios/issues/407" target="_blank">Issue</a>をご覧ください。</p>
</blockquote>


### Development Teamの作成

開発用であっても、すべてのiOSアプリは署名されている必要があります。幸いなことに、Xcodeは`Automatically manage signing`(自動署名機能)で署名することを簡単にしています。唯一必要な条件はApple IDを持っていることです。

Xcodeを開いて、**Xcode** &raquo; **Preferences** &raquo; **Accounts**に移動してください。何も表示されていない場合は、Apple IDを追加してください。一度ログインすると、`Term`にあなたの`Personal Team`が表示されます。

![Xcode Accounts](/docs/assets/img/installation/ios-xcode-accounts.png)

### iOS Simulatorの作成

iOS simulatorは、Mac上でiOSデバイスをエミュレートします。以下の資料はiOS Sumulatorをセットアップする簡単な方法です。詳しくは<a href="https://developer.apple.com/library/content/documentation/IDEs/Conceptual/simulator_help_topics/Chapter/Chapter.html" target="_blank">Appleのドキュメント</a>をご覧ください。

Xcodeを開いて、**Window** &raquo; **Devices and Simulators**に移動します。そして、**iPhone X** Sumulatorがまだ存在していない場合は作成します。

![iOS Simulators](/docs/assets/img/installation/ios-xcode-simulators-setup.png)

## ios-sim と ios-deploy

<a href="https://github.com/phonegap/ios-sim" target="_blank">`ios-sim`</a> と <a href="https://github.com/phonegap/ios-deploy" target="_blank">`ios-deploy`</a> は、iOS SumulatorとiOSデバイスに開発中のアプリケーションを表示するためのユーティリティです。これらは[npm](/docs/faq/glossary#npm)でグローバルにインストールすることができます。

```shell
$ npm install -g ios-sim
$ npm install -g ios-deploy
```
