import type { Schema, Struct } from '@strapi/strapi';

export interface BasicFormField extends Struct.ComponentSchema {
  collectionName: 'components_basic_form_fields';
  info: {
    displayName: 'Form field';
    icon: 'layer';
  };
  attributes: {
    label: Schema.Attribute.Component<'basic.text', false>;
  };
}

export interface BasicLinkButton extends Struct.ComponentSchema {
  collectionName: 'components_basic_link_buttons';
  info: {
    displayName: 'Link/button';
    icon: 'link';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<['mint', 'carbon', 'cherry', 'ash']>;
    size: Schema.Attribute.Enumeration<['default', 'small', 'large']>;
    target: Schema.Attribute.Enumeration<['_self', '_blank']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'_self'>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<['link', 'filled', 'outline']> &
      Schema.Attribute.Required;
    URL: Schema.Attribute.String;
  };
}

export interface BasicLogoBrand extends Struct.ComponentSchema {
  collectionName: 'components_basic_logo_brands';
  info: {
    displayName: 'LogoBrand';
    icon: 'emotionHappy';
  };
  attributes: {
    brand: Schema.Attribute.Component<'basic.text', false>;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface BasicMediaGallery extends Struct.ComponentSchema {
  collectionName: 'components_basic_media_galleries';
  info: {
    displayName: 'Media gallery';
    icon: 'apps';
  };
  attributes: {
    caption: Schema.Attribute.Component<'basic.text', false>;
    images: Schema.Attribute.Media<'images', true>;
  };
}

export interface BasicSingleImg extends Struct.ComponentSchema {
  collectionName: 'components_basic_single_imgs';
  info: {
    displayName: 'Single img';
    icon: 'gate';
  };
  attributes: {
    caption: Schema.Attribute.Component<'basic.text', false>;
    singleIMG: Schema.Attribute.Media<'images'>;
  };
}

export interface BasicText extends Struct.ComponentSchema {
  collectionName: 'components_basic_texts';
  info: {
    displayName: 'Text';
    icon: 'alien';
  };
  attributes: {
    Color: Schema.Attribute.Enumeration<['minty', 'carbon', 'cherry', 'ash']>;
    Content: Schema.Attribute.Text;
    HTMLTag: Schema.Attribute.Enumeration<
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']
    >;
    rtfcontent: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    String: Schema.Attribute.String;
    styleTag: Schema.Attribute.Enumeration<['b', 'i', 'u', 'strong']>;
    type: Schema.Attribute.Enumeration<['string', 'content', 'rtf']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'string'>;
  };
}

export interface CoreForm extends Struct.ComponentSchema {
  collectionName: 'components_core_forms';
  info: {
    displayName: 'Form';
    icon: 'bulletList';
  };
  attributes: {
    formField: Schema.Attribute.Component<'basic.form-field', true>;
  };
}

export interface CoreLinkButtonList extends Struct.ComponentSchema {
  collectionName: 'components_core_link_button_lists';
  info: {
    displayName: 'LinkList';
    icon: 'bulletList';
  };
  attributes: {
    links: Schema.Attribute.Component<'basic.link-button', true>;
  };
}

export interface CoreNavbar extends Struct.ComponentSchema {
  collectionName: 'components_core_navbars';
  info: {
    displayName: 'Navbar';
    icon: 'code';
  };
  attributes: {
    links: Schema.Attribute.Component<'basic.link-button', true>;
  };
}

export interface CoreProjectList extends Struct.ComponentSchema {
  collectionName: 'components_core_project_lists';
  info: {
    displayName: 'Project List';
    icon: 'check';
  };
  attributes: {
    category: Schema.Attribute.Relation<'oneToOne', 'api::category.category'>;
  };
}

export interface CoreSimpleTextBox extends Struct.ComponentSchema {
  collectionName: 'components_core_simple_text_boxes';
  info: {
    displayName: 'TextBox';
    icon: 'archive';
  };
  attributes: {
    content: Schema.Attribute.Component<'basic.text', false>;
    img: Schema.Attribute.Component<'basic.single-img', false>;
    shortTitle: Schema.Attribute.Component<'basic.text', false>;
  };
}

export interface CoreWndWproj extends Struct.ComponentSchema {
  collectionName: 'components_core_wnd_wprojs';
  info: {
    displayName: 'WNDWproj';
    icon: 'command';
  };
  attributes: {
    blurb: Schema.Attribute.Component<'basic.text', false>;
    handletxt: Schema.Attribute.Component<'basic.text', false>;
    img: Schema.Attribute.Component<'basic.single-img', false>;
    project: Schema.Attribute.Relation<'oneToOne', 'api::project.project'>;
    title: Schema.Attribute.Component<'basic.text', false>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {};
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface TemplatesBasicContainer extends Struct.ComponentSchema {
  collectionName: 'components_templates_basic_containers';
  info: {
    displayName: 'Basic container';
    icon: 'filter';
  };
  attributes: {
    content: Schema.Attribute.Component<'basic.text', true>;
    CTA: Schema.Attribute.Component<'basic.link-button', true>;
    gallery: Schema.Attribute.Component<'basic.media-gallery', false>;
    img: Schema.Attribute.Component<'basic.single-img', true>;
    linklist: Schema.Attribute.Component<'core.link-button-list', false>;
    subtitle: Schema.Attribute.Component<'basic.text', false>;
    title: Schema.Attribute.Component<'basic.text', false>;
  };
}

export interface TemplatesFormSection extends Struct.ComponentSchema {
  collectionName: 'components_templates_form_sections';
  info: {
    displayName: 'Form section';
    icon: 'collapse';
  };
  attributes: {
    form: Schema.Attribute.Component<'core.form', false>;
    img: Schema.Attribute.Component<'basic.single-img', true>;
    subtitle: Schema.Attribute.Component<'basic.text', false>;
    title: Schema.Attribute.Component<'basic.text', false>;
  };
}

export interface TemplatesHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_templates_hero_sections';
  info: {
    displayName: 'Hero section';
    icon: 'alien';
  };
  attributes: {
    heroImg: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.Component<'basic.text', false>;
    title: Schema.Attribute.Component<'basic.text', false>;
  };
}

export interface TemplatesProjectOverview extends Struct.ComponentSchema {
  collectionName: 'components_templates_project_overviews';
  info: {
    displayName: 'Project overview';
    icon: 'arrowUp';
  };
  attributes: {
    projBlurb: Schema.Attribute.Component<'basic.text', false>;
    tools: Schema.Attribute.Component<'basic.text', false>;
    year: Schema.Attribute.Component<'basic.text', false>;
  };
}

export interface TemplatesTextBoxes extends Struct.ComponentSchema {
  collectionName: 'components_templates_text_boxes';
  info: {
    displayName: 'Text boxes';
    icon: 'book';
  };
  attributes: {
    subtitle: Schema.Attribute.Component<'basic.text', false>;
    textboxes: Schema.Attribute.Component<'core.simple-text-box', true>;
    title: Schema.Attribute.Component<'basic.text', false>;
  };
}

export interface TemplatesWndWs extends Struct.ComponentSchema {
  collectionName: 'components_templates_wnd_ws';
  info: {
    displayName: 'WNDWs';
    icon: 'refresh';
  };
  attributes: {
    CTA: Schema.Attribute.Component<'basic.link-button', false>;
    subtitle: Schema.Attribute.Component<'basic.text', false>;
    title: Schema.Attribute.Component<'basic.text', false>;
    wndws: Schema.Attribute.Component<'core.wnd-wproj', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'basic.form-field': BasicFormField;
      'basic.link-button': BasicLinkButton;
      'basic.logo-brand': BasicLogoBrand;
      'basic.media-gallery': BasicMediaGallery;
      'basic.single-img': BasicSingleImg;
      'basic.text': BasicText;
      'core.form': CoreForm;
      'core.link-button-list': CoreLinkButtonList;
      'core.navbar': CoreNavbar;
      'core.project-list': CoreProjectList;
      'core.simple-text-box': CoreSimpleTextBox;
      'core.wnd-wproj': CoreWndWproj;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'templates.basic-container': TemplatesBasicContainer;
      'templates.form-section': TemplatesFormSection;
      'templates.hero-section': TemplatesHeroSection;
      'templates.project-overview': TemplatesProjectOverview;
      'templates.text-boxes': TemplatesTextBoxes;
      'templates.wnd-ws': TemplatesWndWs;
    }
  }
}
