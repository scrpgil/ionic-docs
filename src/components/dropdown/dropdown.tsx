import { Component, Element, Listen, Method, Prop, State, h } from '@stencil/core';
import { DownArrow } from '../../icons';

@Component({
  tag: 'docs-dropdown',
  styleUrl: 'dropdown.css'
})
export class DocsDropdown {
  @Prop() align: 'left' | 'right' | 'center' = 'left';
  @Prop() label: string;
  @Prop() icon: (props: any) => JSX.Element;
  @State() isOpen = false;
  @Element() element: HTMLElement;

  @Listen('window:click')
  handleClick(event: MouseEvent) {
    const isNode = event.target instanceof Node;
    const isOurs = isNode && this.element.contains(event.target as Node);

    if (!isOurs) {
      this.close();
    }
  }

  @Listen('keyup')
  handleKeyup(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.toggle();
    }

    if (event.key === 'Escape') {
      this.close();
    }
  }

  @Method()
  close() {
    this.isOpen = false;
  }

  @Method()
  open() {
    this.isOpen = true;
  }

  @Method()
  toggle() {
    this.isOpen = !this.isOpen;
  }

  hostData() {
    return {
      tabindex: '0',
      class: {
        'Dropdown': true,
        [`Dropdown--${this.align}`]: true,
        'is-open': this.isOpen
      }
    };
  }

  render() {
    const Icon = this.icon;
    const button = (
      <button
        tabindex="-1"
        class="Dropdown-button"
        aria-haspopup="menu"
        aria-expanded={this.isOpen ? 'true' : 'false'}
        onClick={this.toggle.bind(this)}>
        {this.label ? this.label : null}
        {Icon ? <Icon class="Dropdown-icon"/> : null}
        <DownArrow class="Dropdown-arrow"/>
      </button>
    );

    const panel = (
      <div
        role="menu"
        class="Dropdown-panel">
        <slot/>
      </div>
    );

    return [
      button,
      panel
    ];
  }
}
