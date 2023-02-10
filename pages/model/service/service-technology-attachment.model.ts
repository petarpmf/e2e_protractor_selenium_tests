export interface IPrimarySecondaryProducts {
   primaryProductName?: string;
   primaryProductVersion?: string;
   secondaryProducts?: Array<any>;
}

export class PrimarySecondaryProducts implements IPrimarySecondaryProducts {
   primaryProductName?: string;
   primaryProductVersion?: string;
   secondaryProducts?: Array<any>;

   constructor(primarySecondaryProducts: IPrimarySecondaryProducts) {
      this.primaryProductName = primarySecondaryProducts.primaryProductName;
      this.primaryProductVersion = primarySecondaryProducts.primaryProductVersion;
      this.secondaryProducts = primarySecondaryProducts.secondaryProducts;
   };

   getPrimaryProductName(): string {
      return this.primaryProductName;
   };

   setPrimaryProductName(value: string) {
      this.primaryProductName = value;
   };

   getPrimaryProductVersion(): string {
      return this.primaryProductVersion;
   };

   setPrimaryProductVersion(value: string) {
      this.primaryProductVersion = value;
   };

   getSecondaryProducts(): Array<any> {
      return this.secondaryProducts;
   };

   setSecondaryProducts(value: Array<any>) {
      this.secondaryProducts = value;
   };
}

export interface IThirdPartyProduct {
   productId?: string;
   thirdPartyProductName?: string;
   softwareVendor?: string;
   softwareProduct?: string;
   softwareProductVersion?: number;
   hardwareVendor?: string;
   hardwareProduct?: string;
   hardwareSoftwareVersion?: number;
}

export class ThirdPartyProduct {
   productId: string;
   thirdPartyProductName?: string;
   softwareVendor?: string;
   softwareProduct?: string;
   softwareProductVersion?: number;
   hardwareVendor?: string;
   hardwareProduct?: string;
   hardwareSoftwareVersion?: number;

   constructor(thirdPartyProduct: IThirdPartyProduct) {
      this.productId = thirdPartyProduct.productId;
      this.thirdPartyProductName = thirdPartyProduct.thirdPartyProductName;
      this.softwareVendor = thirdPartyProduct.softwareVendor;
      this.softwareProduct = thirdPartyProduct.softwareProduct;
      this.softwareProductVersion = thirdPartyProduct.softwareProductVersion;
      this.hardwareVendor = thirdPartyProduct.hardwareVendor;
      this.hardwareProduct = thirdPartyProduct.hardwareProduct;
      this.hardwareSoftwareVersion = thirdPartyProduct.hardwareSoftwareVersion;
   };

   getThirdPartyProductName(): string {
      return this.thirdPartyProductName;
   };

   setThirdPartyProductName(value: string) {
      this.thirdPartyProductName = value;
   };

   getSoftwareVendor(): string {
      return this.softwareVendor;
   };

   setSoftwareVendor(value: string) {
      this.softwareVendor = value;
   };

   getSoftwareProduct(): string {
      return this.softwareProduct;
   };

   setSoftwareProduct(value: string) {
      this.softwareProduct = value;
   };

   getSoftwareProductVersion(): number {
      return this.softwareProductVersion;
   };

   setSoftwareProductVersion(value: number) {
      this.softwareProductVersion = value;
   };

   getHardwareVendor(): string {
      return this.hardwareVendor;
   };

   setHardwareVendor(value: string) {
      this.hardwareVendor = value;
   };

   getHardwareProduct(): string {
      return this.hardwareProduct;
   };

   setHardwareProduct(value: string) {
      this.hardwareProduct = value;
   };

   getHardwareSoftwareVersion(): number {
      return this.hardwareSoftwareVersion;
   };

   setHardwareSoftwareVersion(value: number) {
      this.hardwareSoftwareVersion = value;
   };
}