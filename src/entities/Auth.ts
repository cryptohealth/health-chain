const makeAuth = ({ md5, is }: any) => {
  return (profile: any) => {
    const secret = "sdasdasfggsd";
    console.log(is)
    const activated = true

    const user = {
      hash: md5(profile.id + profile._json.email + secret),
      provider: profile.provider,
      externalId: profile.id,
      email: profile._json.email,
      password: false,
      displayName: profile.displayName,
      name: profile._json.name,
      photos: profile.photos,
      locale: profile._json.locale,
      languague: profile._json.language,
      raw: profile._raw,
      createAt: new Date(),
      updateAt: new Date(),
    };

    // is.provider(profile.provider)
    // is.displayName(profile.displayName)
    // is.email(profile._json.email)
    // is.locale(profile._json.locale)
    // is.languague(profile._json.language)
    // is.externalId(profile.id)
    // is.photo(profile.photos)

    return {
      getEmail: ():string  => user.email,
      getRaw: ():string  => user.raw,
      getDisplayName: (): string => user.displayName,
      getProdiver: ():string  => user.provider,
      getLocale: () => user.locale,
      getLanguague: () => user.languague,
      getPhoto: () => user.photos,
      getName: ():string  => user.name,
      getUser: ()  => user,
      getExternalId: ():string  => user.externalId,
      getUpdateAt: ():string  => user.name,
      getPassword: () => user.password,
      getCreateAt: () => user.createAt,
      getActivated: () => activated,
      getHash: ():string => user.hash,
    };
  };
};

export default makeAuth;
