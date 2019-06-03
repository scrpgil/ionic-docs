import { h } from '@stencil/core';
import { useLocalStorage } from '../../../local-storage';

const [getFramework] = useLocalStorage('ionic-docs:framework');

export default (props) => {
  const { page } = props;
  const headings = [...page.headings];
  const usage = renderUsage(page.usage, page.path);
  const properties = renderProperties(page.props);
  const events = renderEvents(page.events);
  const methods = renderMethods(page.methods);
  const customProps = renderCustomProps(page.styles);
  const slots = renderSlots(page.slots);

  if (usage) {
    headings.push({
      text: '利用方法',
      href: '#usage'
    });
  }

  if (properties) {
    headings.push({
      text: 'プロパティ',
      href: '#properties'
    });
  }

  if (events) {
    headings.push({
      text: 'イベント',
      href: '#events'
    });
  }

  if (methods) {
    headings.push({
      text: 'メソッド',
      href: '#methods'
    });
  }

  if (customProps) {
    headings.push({
      text: 'CSSカスタムプロパティ',
      href: '#css-custom-properties'
    });
  }

  if (slots) {
    headings.push({
      text: 'slot属性',
      href: '#slots'
    });
  }

  return (
    <article>
      <h1>{ page.title }</h1>
      <docs-table-of-contents links={headings} basepath={page.path}/>
      <section class="markdown-content" innerHTML={page.body}/>
      { usage }
      { properties }
      { events }
      { methods }
      { customProps }
      { slots }
    </article>
  );
};

const renderUsage = (usage = {}, path: string) => {
  const keys = Object.keys(usage);
  const frameworkPref = getFramework();
  const framework = frameworkPref ? frameworkPref.toLowerCase() : null;

  if (!keys.length) {
    return null;
  }

  return (
    <section>
      <h2 id="usage">
        <a href="#usage">利用方法</a>
      </h2>
      <docs-tabs key={path}>
          {keys.map(key =>
            <docs-tab
              tab={key}
              selected={framework === key.toLowerCase()}>
                <div innerHTML={usage[key]}></div>
            </docs-tab>
          )}
      </docs-tabs>
    </section>
  );
};

const renderProperties = (properties = []) => {
  if (!properties.length) {
    return null;
  }

  return (
    <section>
      <h2 id="properties">
        <a href="#properties">プロパティ</a>
      </h2>
      <docs-reference
        data={properties}
        keys={{
          Head: prop => prop.name,
          Description: prop => <div innerHTML={prop.docs}/>,
          Attribute: prop => prop.attr ? <code>{ prop.attr }</code> : null,
          Type: prop => <code>{ prop.type }</code>,
          Default: prop => prop.default ? <code>{ prop.default }</code> : null
        }}/>
    </section>
  );
};

const renderEvents = (events = []) => {
  if (!events.length) {
    return null;
  }

  return (
    <section>
      <h2 id="events">
        <a href="#events">イベント</a>
      </h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr>
              <td><code>{ event.event }</code></td>
              <td>{ event.docs }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

const renderMethods = (methods = []) => {
  if (!methods.length) {
    return null;
  }

  return (
    <section>
      <h2 id="methods">
        <a href="#methods">メソッド</a>
      </h2>
      <docs-reference
        data={methods}
        keys={{
          Head: method => method.name,
          Description: method => <div innerHTML={method.docs}/>,
          Signature: method => <code>{ method.signature }</code>
        }}/>
    </section>
  );
};

const renderCustomProps = (customProps = []) => {
  if (!customProps.length) {
    return null;
  }

  return (
    <section>
      <h2 id="css-custom-properties">
        <a href="#css-custom-properties">CSSカスタムプロパティ</a>
      </h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {customProps.map(prop => (
            <tr>
              <td><code>{ prop.name }</code></td>
              <td>{ prop.docs }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

const renderSlots = (slots = []) => {
  if (!slots.length) {
    return null;
  }

  return (
    <section>
      <h2 id="slots">
        <a href="#slots">slot属性</a>
      </h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {slots.map(slot => (
            <tr>
              <td>{ slot.name && <code>"{ slot.name }"</code>}</td>
              <td>{ slot.docs }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
