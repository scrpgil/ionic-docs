---
title: コンポーネント
nextText: API Reference
nextUrl: /docs/api
previewUrl: /docs/content/component-preview-app/docs-www
previewSource: https://github.com/ionic-team/component-preview/tree/master/src/components
hideTOC: true
---

<p class="intro">
  Ionicアプリは、コンポーネントと呼ばれる高レイヤーの構成要素で構成されています。
  コンポーネントを使用すると、アプリのインターフェイスをすばやく構築することができます。Ionicには、
  modals、popups、cardsなど、さまざまなコンポーネントが用意されています。
  以下の例を確認して、各コンポーネントの外観と各コンポーネントの使用方法を確認してください。
  基本に慣れたら、各コンポーネントをカスタマイズする方法についてのアイデアを得るために[API
  docs](/docs/api)をご覧ください。
</p>

<component-preview></component-preview>

## Action Sheet

Action Sheetは、デバイス画面の下端から上にスライドし、一連のオプションを表示して、アクションを確認または取り消すことができます。Action Sheetはメニューの代わりに使用することがありますが、ナビゲーションには使用しないでください。


## Alert

Alertは、特定のアクションまたはアクションのリストを選択する機能を、ユーザーに提供するための優れた方法です。Alertには、texts、inputs、buttonsを含めることができます。それらはユーザーに重要な情報を提供するか、または彼らに決定（または複数の決定）をするように要求することができます。Alertは、パスワードの確認、小さなアプリの通知、クイックオプションなどの素早いアクションにのみ使用します。


## Badge

Badgeコンポーネントは、通常は数値をユーザーに伝えるための小さなコンポーネントです。それらは通常itemの中で使用されます。

```html
<!-- Default -->
<ion-badge>99</ion-badge>

<!-- Colors -->
<ion-badge color="primary">11</ion-badge>
<ion-badge color="secondary">22</ion-badge>
<ion-badge color="tertiary">33</ion-badge>
<ion-badge color="success">44</ion-badge>
<ion-badge color="warning">55</ion-badge>
<ion-badge color="danger">66</ion-badge>
```


## Button

Buttonはアプリと対話したり、アプリ内を移動したりするのに不可欠な方法であり、ユーザーがButtonをタップした後に発生するアクションを明確に伝える必要があります。Buttonは色、形、大きさが完全にカスタマイズ可能で非常にカスタマイズ可能です。丸いButton、FAB Button、アウトラインを表示するButtonなどをサポートします。

```html
<ion-button shape="round" color="primary" fill="outline">Hello World</ion-button>
<ion-button size="small">Small Button</ion-button>
```


## Card

Cardは重要なコンテンツを表示するのに最適な方法であり、アプリのコアとなるデザインパターンとして急速に浮上しています。
Cardには画像、button、textなどを含めることができます。Cardは単独でも利用できますし、
listやgridの中でも使用できます。

```html
<ion-card>
    <ion-img src="/assets/myImg.png"></ion-img>
    <ion-card-header>
        <ion-card-title>Hello World</ion-card-title>
    </ion-card-header>
    <ion-card-content>
        <p>The content for this card</p>
    </ion-card-content>
</ion-card>
```


## Checkbox

Checkboxを使用して、択一の決定をする必要があることをユーザーに知らせることができます。それは正しいか間違った選択のどちらかの明確な視覚を提供します。ion-checkbox は常に ion-item と共に使用されるべきです。あなたがradio入力の外観を好むならば`ion-radio`、トグルを好むなら`ion-toggle`も使うことができます。

```html
<ion-checkbox color="primary" checked></ion-checkbox>
<ion-checkbox color="secondary"></ion-checkbox>
<ion-checkbox color="danger" checked></ion-checkbox>
<ion-checkbox color="light"></ion-checkbox>
<ion-checkbox color="dark" checked></ion-checkbox>
```


## DateTime

DateTimeは、ユーザーが日付と時刻を簡単に選択できるようにするためのインターフェースを提示するために使用します。iOSデバイスでレンダリングすると、DatetimeはネイティブのiOS日付ピッカーのように見え、他のすべてのプラットフォームではMaterial Designになります。Datetimeは常に`ion-item`内で使用されるべきです。

```html
<ion-item>
  <ion-label>Date</ion-label>
  <ion-datetime display-format="MM/DD/YYYY"></ion-datetime>
</ion-item>
```

## Fab

フローティングアクションボタン（FAB）は、画面上で主要な、または最も一般的なアクションを実行する円形のボタンです。これはページのコンテンツの上に浮かび、通常はアプリの一次色または二次色のどちらかに着色されます。FABボタンは`horizontal`、`vertical`、`slot`属性を使用して簡単に配置することもできます。

```html
<ion-fab vertical="bottom" horizontal="end" slot="fixed">
  <ion-fab-button>
    <ion-icon name="add"></ion-icon>
  </ion-fab-button>
</ion-fab>
```

## Grid

グリッドはカスタムレイアウトを構築するための強力なモバイルファーストシステムです。Gridコンポーネントを使用して、アプリがどのデバイスでも美しく見えるようにすることができます。これはBootstrapのグリッドシステムの影響を強く受けます。

```html
<ion-grid>
  <ion-row>
    <ion-col>
      ion-col
    </ion-col>
    <ion-col>
      ion-col
    </ion-col>
    <ion-col>
      ion-col
    </ion-col>
    <ion-col>
      ion-col
    </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="6">
      ion-col [size="6"]
    </ion-col>
    <ion-col>
      ion-col
    </ion-col>
    <ion-col>
      ion-col
    </ion-col>
  </ion-row>
</ion-grid>
```

## Infinite Scroll

Infinite Scrollを使用すると、区切りのある長いリストに、さらにデータをロードするなど、ユーザーがページの下部または上部から指定された距離をスクロールしたときにアクションを実行できます。また、ローディングアニメーションのカスタマイズをすることが可能です。


```html
<ion-infinite-scroll>
  <ion-infinite-scroll-content
    loadingSpinner="bubbles"
    loadingText="Loading more data...">
  </ion-infinite-scroll-content>
</ion-infinite-scroll>
```

## Input

Inputsは、ユーザーにデータを入力するUIを提供します。通常Formやダイアログで使われます。いつも`ion-item`の中で使うべきです。

```html
<ion-item>
  <ion-input required type="text" placeholder="First Name"></ion-input>
</ion-item>
```

## List

Listコンポーネントは、連絡先リスト、プレイリスト、メニューなどの情報行を表示するために使用されます。cards、itemsのリストなどを表示できます。Listsもとてもカスタマイズでき、デフォルトでネイティブのAndroidおよびiOSリストのデザインと一致します。

```html
<ion-list>
  <ion-item>
    <ion-avatar slot="start">
      <img src="/docs/assets/img/avatar-finn.png"></img>
    </ion-avatar>
    <ion-label>
      <h2>Finn</h2>
      <h3>I'm a big deal</h3>
      <p>Listen, I've had a pretty messed up day...</p>
    </ion-label>
  </ion-item>
</ion-list>
```


## Loading

Loadingは、アクティビティを表示しながらユーザーの操作を妨げるオーバーレイです。


## Menu

Menuはアプリの一般的なナビゲーションパターンです。メニューは恒久的に画面上（split-pane）に表示されるか、ビュー内にスワイプされるか、またはメニューボタンを介して切り替えることができます。

```html
<ion-menu side="start">
  <ion-header translucent>
    <ion-toolbar color="secondary">
      <ion-title>Menu</ion-title>
    </ion-toolbar>
  </ion-header>
</ion-menu>
```

## Modal

Modalは、一時的なUIを表示するために画面内および画面外にスライドします。Modalは、ログインページまたはサインアップページ、メッセージの作成、およびオプションの選択によく使用されます。


## Nav

Navは、ユーザーがアプリ内の異なるページ間を移動する方法です。Ionicのナビゲーションは、標準的なナビゲーションの概念とアニメーションによるトランジションに従います。Ionicのナビゲーションは[ion-split-pane](/docs/api/split-pane)を使って大きなビューポートにも適応できます。

```html
<ion-app>
  <ion-nav root="page-one"></ion-nav>
</ion-app>
```

## Popover

Popoverは、アプリのコンテンツの上に浮かぶビューです。Popoverは、ユーザーから情報を提示または収集するための簡単な方法を提供します。一般に、以下の状況で使用されます。

- 現在のビューに関する詳細情報を表示する
- よく使用されるツールまたは構成を選択する
- 自分の意見の1つの中で実行するアクションのリストを提示する


## Range

Rangeは、ユーザーがスライダーバーに沿ってスライダーノブを動かすことによって値を範囲から選択することを可能にするForm Controlです。Rangeは常に`ion-item`で囲む必要があります。

```html
<ion-item>
  <ion-range>
    <ion-icon slot="start" size="small" name="sunny"></ion-icon>
    <ion-icon slot="end" name="sunny"></ion-icon>
  </ion-range>
</ion-item>
```

## Refresher

Refresherは、コンテンツコンポーネントの更新機能を提供します。Refresherコンポーネントの一般的な使用例はデータの再ロードです。

```html
<ion-content fullscreen>
  <ion-refresher slot="fixed">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>
</ion-content>
```


## Searchbar

Searchbarは、アイテムを検索またはフィルタリングするために使用されます。それらは通常`ion-toolbar`の中で使われます。

```html
<ion-toolbar>
  <ion-searchbar></ion-searchbar>
</ion-toolbar>
```

## Select

ion-selectコンポーネントはHTMLの`<select>`要素に似ていますが、Ionicのselectコンポーネントはユーザーが好みのオプションを使って選択するのをより簡単にします。また、ネイティブのAndroidとiOSの選択入力の外観にも一致します。`ion-item`に包まれなければなりません。

```html
<ion-item>
  <ion-label>Hair Color</ion-label>
  <ion-select value="brown" ok-text="Okay" cancel-text="Dismiss">
    <ion-select-option value="brown">Brown</ion-select-option>
    <ion-select-option value="blonde">Blonde</ion-select-option>
    <ion-select-option value="black">Black</ion-select-option>
    <ion-select-option value="red">Red</ion-select-option>
  </ion-select>
</ion-item>
```

## Slides

Slidesを使用すると、ギャラリー、チュートリアル、ページベースのレイアウトなどの複雑なUIを簡単に作成できます。

```html
<ion-slides pager="true">
  <ion-slide>
    <h1>Slide 1</h1>
  </ion-slide>

  <ion-slide>
    <h1>Slide 2</h1>
  </ion-slide>

  <ion-slide>
    <h1>Slide 3</h1>
  </ion-slide>
</ion-slides>
```

## Spinner

`ion-spinner`コンポーネントは、さまざまなアニメーションのSVGスピナーを提供します。Spinnersを使用すると、アプリがアクティブに処理中、検討中、待機中、まったりしていること、または表示したいことをユーザーにフィードバックすることができます。

```html
<ion-spinner></ion-spinner>
<ion-spinner name="lines"></ion-spinner>
```

## Tabs

Tabsを使用すると、タブ付きナビゲーション、つまり現代のアプリケーションの標準的なナビゲーションパターンが有効になります。タブにはアイコンとラベルを表示して、アプリ内のどこにいるかを視覚的にフィードバックすることができます。Tabsはアプリの上部に簡単に配置することもできますが、デフォルトではマテリアルデザインとiOSのデザインガイドラインに合わせて下部に配置されます。

```html
<ion-tabs>
  <ion-tab label="Music" icon="musical-note"></ion-tab>
  <ion-tab label="Profile" icon="person"></ion-tab>
  <ion-tab label="people" icon="people"></ion-tab>
</ion-tabs>
```

## Toast

Toastコンポーネントは、アプリのコンテンツの上に表示される瞬間的な通知です。Toastコンポーネントは、短いメッセージをユーザーに表示するために使用できます。Toastは、モバイルのアプリの下部に幅いっぱいに表示されます。タブレット/デスクトップデバイスでは、Toastは中央に配置され、全幅には配置されません。


## Virtual Scroll

Virtual Scrollは、膨大なアイテム数のリストを効果的にスクロールするためのVirtual Scrollを提供します。Virtual Scrollは、現在表示されている項目のみをレンダリングします。