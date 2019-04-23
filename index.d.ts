// Type definitions for cache-manager-memcached v2.1.0
// Project: https://github.com/theogravity/node-cache-manager-memcached
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class MemcachedClient {
    static create(options: MemcachedClient.MemcachedStoreConfig): MemcachedClient.IMemcachedClient ;
}

declare namespace MemcachedClient {
    interface IMemcachedClient {
        isCacheableValue: (value: any) => boolean;
    }

    interface MemcachedStoreConfig {
        options: any;
    }

}
// export function create(options: MemcachedClient.MemcachedStoreConfig): MemcachedClient.MemcachedClient ;
export = MemcachedClient;