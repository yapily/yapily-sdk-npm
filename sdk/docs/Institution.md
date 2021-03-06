# YapilyApi.Institution

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**name** | **String** |  | [optional] 
**fullName** | **String** |  | [optional] 
**countries** | [**[Country]**](Country.md) |  | [optional] 
**environmentType** | **String** |  | [optional] 
**credentialsType** | **String** |  | [optional] 
**media** | [**[Media]**](Media.md) |  | [optional] 
**features** | **[String]** |  | [optional] 
**monitoring** | [**{String: MonitoringFeatureStatus}**](MonitoringFeatureStatus.md) |  | [optional] 



## Enum: EnvironmentTypeEnum


* `SANDBOX` (value: `"SANDBOX"`)

* `MOCK` (value: `"MOCK"`)

* `LIVE` (value: `"LIVE"`)





## Enum: CredentialsTypeEnum


* `OAUTH1` (value: `"OAUTH1"`)

* `OAUTH2` (value: `"OAUTH2"`)

* `OAUTH2_NOSECRET` (value: `"OAUTH2_NOSECRET"`)

* `OAUTH2_SIGNATURE` (value: `"OAUTH2_SIGNATURE"`)

* `OPEN_BANKING` (value: `"OPEN_BANKING"`)

* `OPEN_BANKING_UK_MANUAL` (value: `"OPEN_BANKING_UK_MANUAL"`)

* `OPEN_BANKING_UK_AUTO` (value: `"OPEN_BANKING_UK_AUTO"`)

* `OPEN_BANKING_IBM` (value: `"OPEN_BANKING_IBM"`)

* `OPEN_BANKING_AUTO` (value: `"OPEN_BANKING_AUTO"`)

* `OPEN_BANKING_AUTO_EMAIL` (value: `"OPEN_BANKING_AUTO_EMAIL"`)

* `OPEN_BANKING_MANUAL` (value: `"OPEN_BANKING_MANUAL"`)

* `OPEN_BANKING_WITH_TPP_ID_AND_SECRET` (value: `"OPEN_BANKING_WITH_TPP_ID_AND_SECRET"`)

* `API_KEY` (value: `"API_KEY"`)

* `OPEN_BANKING_NO_KEY` (value: `"OPEN_BANKING_NO_KEY"`)

* `OPEN_BANKING_NO_TRANSPORT` (value: `"OPEN_BANKING_NO_TRANSPORT"`)

* `TOKEN_IO` (value: `"TOKEN_IO"`)





## Enum: [FeaturesEnum]


* `INITIATE_PRE_AUTHORISATION` (value: `"INITIATE_PRE_AUTHORISATION"`)

* `INITIATE_ACCOUNT_REQUEST` (value: `"INITIATE_ACCOUNT_REQUEST"`)

* `INITIATE_EMBEDDED_ACCOUNT_REQUEST` (value: `"INITIATE_EMBEDDED_ACCOUNT_REQUEST"`)

* `ACCOUNT_REQUEST_DETAILS` (value: `"ACCOUNT_REQUEST_DETAILS"`)

* `ACCOUNTS` (value: `"ACCOUNTS"`)

* `ACCOUNT` (value: `"ACCOUNT"`)

* `ACCOUNT_TRANSACTIONS` (value: `"ACCOUNT_TRANSACTIONS"`)

* `ACCOUNT_STATEMENTS` (value: `"ACCOUNT_STATEMENTS"`)

* `ACCOUNT_STATEMENT` (value: `"ACCOUNT_STATEMENT"`)

* `ACCOUNT_STATEMENT_FILE` (value: `"ACCOUNT_STATEMENT_FILE"`)

* `ACCOUNT_SCHEDULED_PAYMENTS` (value: `"ACCOUNT_SCHEDULED_PAYMENTS"`)

* `ACCOUNT_DIRECT_DEBITS` (value: `"ACCOUNT_DIRECT_DEBITS"`)

* `ACCOUNT_PERIODIC_PAYMENTS` (value: `"ACCOUNT_PERIODIC_PAYMENTS"`)

* `ACCOUNT_TRANSACTIONS_WITH_MERCHANT` (value: `"ACCOUNT_TRANSACTIONS_WITH_MERCHANT"`)

* `IDENTITY` (value: `"IDENTITY"`)

* `ACCOUNTS_WITHOUT_BALANCE` (value: `"ACCOUNTS_WITHOUT_BALANCE"`)

* `ACCOUNT_WITHOUT_BALANCE` (value: `"ACCOUNT_WITHOUT_BALANCE"`)

* `ACCOUNT_BALANCES` (value: `"ACCOUNT_BALANCES"`)

* `ACCOUNT_BENEFICIARIES` (value: `"ACCOUNT_BENEFICIARIES"`)

* `INITIATE_SINGLE_PAYMENT_SORTCODE` (value: `"INITIATE_SINGLE_PAYMENT_SORTCODE"`)

* `EXISTING_PAYMENT_INITIATION_DETAILS` (value: `"EXISTING_PAYMENT_INITIATION_DETAILS"`)

* `CREATE_SINGLE_PAYMENT_SORTCODE` (value: `"CREATE_SINGLE_PAYMENT_SORTCODE"`)

* `EXISTING_PAYMENTS_DETAILS` (value: `"EXISTING_PAYMENTS_DETAILS"`)

* `INITIATE_DOMESTIC_SINGLE_PAYMENT` (value: `"INITIATE_DOMESTIC_SINGLE_PAYMENT"`)

* `INITIATE_EMBEDDED_DOMESTIC_SINGLE_PAYMENT` (value: `"INITIATE_EMBEDDED_DOMESTIC_SINGLE_PAYMENT"`)

* `CREATE_DOMESTIC_SINGLE_PAYMENT` (value: `"CREATE_DOMESTIC_SINGLE_PAYMENT"`)

* `INITIATE_DOMESTIC_SINGLE_INSTANT_PAYMENT` (value: `"INITIATE_DOMESTIC_SINGLE_INSTANT_PAYMENT"`)

* `CREATE_DOMESTIC_SINGLE_INSTANT_PAYMENT` (value: `"CREATE_DOMESTIC_SINGLE_INSTANT_PAYMENT"`)

* `INITIATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT` (value: `"INITIATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT"`)

* `CREATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT` (value: `"CREATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT"`)

* `INITIATE_DOMESTIC_SCHEDULED_PAYMENT` (value: `"INITIATE_DOMESTIC_SCHEDULED_PAYMENT"`)

* `CREATE_DOMESTIC_SCHEDULED_PAYMENT` (value: `"CREATE_DOMESTIC_SCHEDULED_PAYMENT"`)

* `INITIATE_DOMESTIC_PERIODIC_PAYMENT` (value: `"INITIATE_DOMESTIC_PERIODIC_PAYMENT"`)

* `CREATE_DOMESTIC_PERIODIC_PAYMENT` (value: `"CREATE_DOMESTIC_PERIODIC_PAYMENT"`)

* `PERIODIC_PAYMENT_FREQUENCY_EXTENDED` (value: `"PERIODIC_PAYMENT_FREQUENCY_EXTENDED"`)

* `INITIATE_INTERNATIONAL_VARIABLE_RECURRING_PAYMENT` (value: `"INITIATE_INTERNATIONAL_VARIABLE_RECURRING_PAYMENT"`)

* `CREATE_INTERNATIONAL_VARIABLE_RECURRING_PAYMENT` (value: `"CREATE_INTERNATIONAL_VARIABLE_RECURRING_PAYMENT"`)

* `INITIATE_INTERNATIONAL_SCHEDULED_PAYMENT` (value: `"INITIATE_INTERNATIONAL_SCHEDULED_PAYMENT"`)

* `CREATE_INTERNATIONAL_SCHEDULED_PAYMENT` (value: `"CREATE_INTERNATIONAL_SCHEDULED_PAYMENT"`)

* `INITIATE_INTERNATIONAL_PERIODIC_PAYMENT` (value: `"INITIATE_INTERNATIONAL_PERIODIC_PAYMENT"`)

* `CREATE_INTERNATIONAL_PERIODIC_PAYMENT` (value: `"CREATE_INTERNATIONAL_PERIODIC_PAYMENT"`)

* `INITIATE_INTERNATIONAL_SINGLE_PAYMENT` (value: `"INITIATE_INTERNATIONAL_SINGLE_PAYMENT"`)

* `CREATE_INTERNATIONAL_SINGLE_PAYMENT` (value: `"CREATE_INTERNATIONAL_SINGLE_PAYMENT"`)

* `INITIATE_BULK_PAYMENT` (value: `"INITIATE_BULK_PAYMENT"`)

* `CREATE_BULK_PAYMENT` (value: `"CREATE_BULK_PAYMENT"`)

* `TRANSFER` (value: `"TRANSFER"`)

* `OPEN_DATA_PERSONAL_CURRENT_ACCOUNTS` (value: `"OPEN_DATA_PERSONAL_CURRENT_ACCOUNTS"`)

* `OPEN_DATA_ATMS` (value: `"OPEN_DATA_ATMS"`)

* `READ_DOMESTIC_SINGLE_REFUND` (value: `"READ_DOMESTIC_SINGLE_REFUND"`)

* `READ_DOMESTIC_SCHEDULED_REFUND` (value: `"READ_DOMESTIC_SCHEDULED_REFUND"`)

* `READ_DOMESTIC_PERIODIC_PAYMENT_REFUND` (value: `"READ_DOMESTIC_PERIODIC_PAYMENT_REFUND"`)

* `READ_INTERNATIONAL_SINGLE_REFUND` (value: `"READ_INTERNATIONAL_SINGLE_REFUND"`)

* `READ_INTERNATIONAL_SCHEDULED_REFUND` (value: `"READ_INTERNATIONAL_SCHEDULED_REFUND"`)




