

import hashlib
def hash256(data, times):
    sha256_hash = data
    for _ in range(times):
        sha256_hash = hashlib.sha256(sha256_hash.encode('utf-8')).hexdigest()
    return sha256_hash

import uuid
def GenerateUUID(name, namespace=uuid.NAMESPACE_DNS):
    generated_uuid = str(uuid.uuid5(namespace, name))
    return generated_uuid.replace('-', '')

