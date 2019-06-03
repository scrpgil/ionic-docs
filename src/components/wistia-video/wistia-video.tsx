import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'wistia-video'
})
export class WistiaVideo {
  @Prop() id: string;

  componentDidLoad() {
    if (!document.getElementById('wistia_script')) {
      const wistiaScript = document.createElement('script');
      wistiaScript.id = 'wistia_script';
      wistiaScript.type = 'text/javascript';
      wistiaScript.src = 'https://fast.wistia.com/assets/external/E-v1.js';
      wistiaScript.async = true;
      document.body.appendChild(wistiaScript);
    }
  }

  render() {
    return (
        <div class={`wistia_embed wistia_async_${this.id} videoFoam=true`}>&nbsp;</div>
    );
  }
}
