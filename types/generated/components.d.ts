import type { Schema, Struct } from '@strapi/strapi';

export interface ProvaButton extends Struct.ComponentSchema {
  collectionName: 'components_prova_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    Color: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'dark', 'light']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'primary'>;
    Size: Schema.Attribute.Enumeration<['default', 'small', 'large']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'default'>;
    Text: Schema.Attribute.String & Schema.Attribute.Required;
    Type: Schema.Attribute.Enumeration<['link', 'filled', 'outline']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'filled'>;
    URL: Schema.Attribute.String;
  };
}

export interface ProvaCategoryOverview extends Struct.ComponentSchema {
  collectionName: 'components_prova_category_overviews';
  info: {
    displayName: 'Category overview';
    icon: 'bulletList';
  };
  attributes: {
    catBlurb: Schema.Attribute.Text & Schema.Attribute.Required;
    categoryLink: Schema.Attribute.Component<'prova.button', false>;
    catTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProvaHeroImg extends Struct.ComponentSchema {
  collectionName: 'components_prova_hero_imgs';
  info: {
    displayName: 'Hero Img';
    icon: 'picture';
  };
  attributes: {
    heroimg: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
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

export interface ProvaMediaGallery extends Struct.ComponentSchema {
  collectionName: 'components_prova_media_galleries';
  info: {
    displayName: 'Media gallery';
    icon: 'dashboard';
  };
  attributes: {
    files: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface ProvaProjectOverview extends Struct.ComponentSchema {
  collectionName: 'components_prova_project_overviews';
  info: {
    displayName: 'Project overview';
    icon: 'play';
  };
  attributes: {
    categoryLink: Schema.Attribute.Component<'prova.button', false>;
    projBlurb: Schema.Attribute.Text & Schema.Attribute.Required;
    project: Schema.Attribute.Relation<'oneToOne', 'api::project.project'>;
    projectLink: Schema.Attribute.Component<'prova.button', false>;
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
      'prova.button': ProvaButton;
      'prova.category-overview': ProvaCategoryOverview;
      'prova.hero-img': ProvaHeroImg;
      'prova.list-project': ProvaListProject;
      'prova.media-gallery': ProvaMediaGallery;
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
