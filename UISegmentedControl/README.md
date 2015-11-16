### `UIKit/UISegmentedControl`
#### A control containing multiple buttons, only one of which can be active at a time.

UISegmentedControl is implemented as a "controlled component", meaning it is a direct representation of the model data passed inside. User interaction will bubble changes in the form of `onOptionSelected` that a controller view must intercept and apply against the data provider.

```jsx
return (
    <div>
        <p>Paper or plastic?</p>
        <div className='ui-spread-even'>
            <UISegmentedControl
                options={this.state.options}
                onOptionSelected={this.handleOptionSelected.bind(this)} />
        </div>
    </div>
);
```
Renders:
```html
<div>
  <p>Paper or plastic?</p>
  <div class="ui-spread-even">
    <div class="ui-segmented-control">
      <div class="ui-segmented-control-option ui-segmented-control-option-selected">
          Paper
      </div>
      <div class="ui-segmented-control-option">
          Plastic
      </div>
    </div>
  </div>
</div>
```

Styling of the element is provided via the CSS hooks:

- `.ui-segmented-control`
- `.ui-segmented-control-option`
- `.ui-segmented-control-option-selected`

<br />
##### Expected Interactions

Type | Context | Expectation
---- | ------- | -----------
__Mouse__ | `click` (not selected) | should trigger `onOptionSelected` on clicked option
__Keyboard__ |`[Tab]` | should forward-exit `UISegmentedControl` tabbing context
__Keyboard__ |`[Shift+Tab]` | should backward-exit `UISegmentedControl` tabbing context
__Keyboard__ |`['Left', 'Right']` | should move focus to previous/next child; should loop
__Keyboard__ (*RTL*) | `['Left', 'Right']` | should move focus to next/previous child; should loop
__Keyboard__ | `['Enter']` | should trigger `onOptionSelected` for focused option

<br />
##### Available `props`
- __attrs__ `Object`
  __attrs.*__
  any [React-supported attribute](https://facebook.github.io/react/docs/tags-and-attributes.html#html-attributes) is a valid prop for this element; applied to the rendered `.ui-segmented-control` node

- __className__ `String`
  additional CSS class(es) to be added to the rendered `.ui-segmented-control` node

- __onOptionSelected__ `Function`
  called when a child element becomes selected; backing data must be updated to persist the state change

<br />
##### `props` validation

1. There must be at least two `options` (a segmented control with one button is not allowed)

1. There must only be one `option` whose `selected` attribute is `true` (multiple selections are not allowed)

1. Each `value` attribute must be unique across the set of `options`