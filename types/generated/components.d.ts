import type { Schema, Struct } from '@strapi/strapi';

export interface ProvaCategoryOverview extends Struct.ComponentSchema {
  collectionName: 'components_prova_category_overviews';
  info: {
    displayName: 'Category overview';
    icon: 'bulletList';
  };
  attributes: {
    catBlurb: Schema.Attribute.Text & Schema.Attribute.Required;
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
    projBlurb: Schema.Attribute.Text & Schema.Attribute.Required;
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
      'prova.category-overview': ProvaCategoryOverview;
      'prova.hero-img': ProvaHeroImg;
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
