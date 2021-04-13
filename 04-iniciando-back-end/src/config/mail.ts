interface IMailConfig {
  diver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  diver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'maxpb777@gmail.com',
      name: 'Mardeson da MAXPB7',
    },
  },
} as IMailConfig;
