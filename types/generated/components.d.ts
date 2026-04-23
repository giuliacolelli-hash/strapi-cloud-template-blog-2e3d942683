import type { Schema, Struct } from '@strapi/strapi';

export interface BasicButtonOrLinkList extends Struct.ComponentSchema {
  collectionName: 'components_basic_button_or_link_lists';
  info: {
    displayName: 'Button or link list';
    icon: 'bulletList';
  };
  attributes: {};
}

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

export interface BasicHeroImg extends Struct.ComponentSchema {
  collectionName: 'components_basic_hero_imgs';
  info: {
    displayName: 'Hero Img';
    icon: 'expand';
  };
  attributes: {
    heroimg: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface BasicLinkButton extends Struct.ComponentSchema {
  collectionName: 'components_basic_link_buttons';
  info: {
    displayName: 'Link/button';
    icon: 'link';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'dark', 'light']
    >;
    size: Schema.Attribute.Enumeration<['default', 'small', 'large']>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<['link', 'filled', 'outline']>;
    URL: Schema.Attribute.String;
  };
}

export interface BasicLogoBrand extends Struct.ComponentSchema {
  collectionName: 'components_basic_logo_brands';
  info: {
    displayName: 'Logo-brand';
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
    captions: Schema.Attribute.Component<'basic.text', true>;
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
    Color: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'tertiary', 'light', 'dark']
    >;
    Content: Schema.Attribute.Text;
    HTMLTag: Schema.Attribute.Enumeration<
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']
    >;
    String: Schema.Attribute.String;
    styleTag: Schema.Attribute.Enumeration<['b', 'i', 'u', 'strong']>;
  };
}

export interface ProvaCategoryOverview extends Struct.ComponentSchema {
  collectionName: 'components_prova_category_overviews';
  info: {
    displayName: 'Category overview';
    icon: 'bulletList';
  };
  attributes: {
    catBlurb: Schema.Attribute.Component<'basic.text', false>;
    catTitle: Schema.Attribute.Component<'basic.text', false>;
  };
}

export interface ProvaListProject extends Struct.ComponentSchema {
  collectionName: 'components_prova_list_projects';
  info: {
    displayName: 'List project';
  };
  attributes: {
    category: Schema.Attribute.Relation<'oneToOne', 'api::category.category'>;
  };
}

export interface ProvaProjectOverview extends Struct.ComponentSchema {
  collectionName: 'components_prova_project_overviews';
  info: {
    displayName: 'Project overview';
    icon: 'play';
  };
  attributes: {
    projBlurb: Schema.Attribute.Text & Schema.Attribute.Required;
    project: Schema.Attribute.Relation<'oneToOne', 'api::project.project'>;
    projImg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    projTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProvaTextBox extends Struct.ComponentSchema {
  collectionName: 'components_prova_text_boxes';
  info: {
    displayName: 'Text box';
    icon: 'write';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    shortTitle: Schema.Attribute.String & Schema.Attribute.Required;
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
  attributes: {
    body: Schema.Attribute.RichText;
  };
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'basic.button-or-link-list': BasicButtonOrLinkList;
      'basic.form-field': BasicFormField;
      'basic.hero-img': BasicHeroImg;
      'basic.link-button': BasicLinkButton;
      'basic.logo-brand': BasicLogoBrand;
      'basic.media-gallery': BasicMediaGallery;
      'basic.single-img': BasicSingleImg;
      'basic.text': BasicText;
      'prova.category-overview': ProvaCategoryOverview;
      'prova.list-project': ProvaListProject;
      'prova.project-overview': ProvaProjectOverview;
      'prova.text-box': ProvaTextBox;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
