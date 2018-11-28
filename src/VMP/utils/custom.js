/**
 * 自定义默认组件样式
 * @param customProps
 * @param {*} customProps 
 * RN version 0.57.4
 */
export const setCustom = (WrapComponent, customProps) => {
    const componentRender  = WrapComponent.render
    const initialDefaultProps = WrapComponent.defaultProps
    WrapComponent.defaultProps = {
      ...initialDefaultProps,
      ...customProps
    }
    WrapComponent.render = function render(props) {
      let oldProps = props
      props = { ...props, style: [customProps.style, props.style] }
      try {
        return componentRender.apply(this, arguments)
      } finally {
        props = oldProps
      }
    }
}


/**
 * 自定义Text默认组件的样式 高版本
 * @param {*} customProps 
 */
export const setCustomText = customProps => {
    const TextRender = Text.render
    const initialDefaultProps = Text.defaultProps
    Text.defaultProps = {
      ...initialDefaultProps,
      ...customProps
    }
    Text.render = function render(props) {
      let oldProps = props
      props = { ...props, style: [customProps.style, props.style] }
      try {
        return TextRender.apply(this, arguments)
      } finally {
        props = oldProps
      }
    }
  }


  /**
 * 自定义默认Text样式 低版本
 * @param customProps
 */
export const setCustomTextOfLowVersion = customProps => {
    const TextRender = Text.prototype.render;
    const initialDefaultProps = Text.prototype.constructor.defaultProps;
    Text.prototype.constructor.defaultProps = {
      ...initialDefaultProps,
      ...customProps
    };
    Text.prototype.render = function render() {
      let oldProps = this.props;
      this.props = {
        ...this.props,
        style: [customProps.style, this.props.style]
      };
      try {
        return TextRender.apply(this, arguments);
      } finally {
        this.props = oldProps;
      }
    };
  };



  