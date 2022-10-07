# finnhub.BondTickData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**skip** | **Number** | Number of ticks skipped. | [optional] 
**count** | **Number** | Number of ticks returned. If &lt;code&gt;count&lt;/code&gt; &lt; &lt;code&gt;limit&lt;/code&gt;, all data for that date has been returned. | [optional] 
**total** | **Number** | Total number of ticks for that date. | [optional] 
**v** | **[Number]** | List of volume data. | [optional] 
**p** | **[Number]** | List of price data. | [optional] 
**t** | **[Number]** | List of timestamp in UNIX ms. | [optional] 
**si** | **[String]** | List of values showing the side (Buy/sell) of each trade. List of supported values: &lt;a target&#x3D;\&quot;_blank\&quot; href&#x3D;\&quot;https://docs.google.com/spreadsheets/d/1O3aueXSPOqo7Iuyz4PqDG6yZunHsX8BTefZ2kFk5pz4/edit?usp&#x3D;sharing\&quot;,&gt;here&lt;/a&gt; | [optional] 
**cp** | **[String]** | List of values showing the counterparty of each trade. List of supported values: &lt;a target&#x3D;\&quot;_blank\&quot; href&#x3D;\&quot;https://docs.google.com/spreadsheets/d/1O3aueXSPOqo7Iuyz4PqDG6yZunHsX8BTefZ2kFk5pz4/edit?usp&#x3D;sharing\&quot;,&gt;here&lt;/a&gt; | [optional] 
**c** | **[[String]]** | List of trade conditions. A comprehensive list of trade conditions code can be found &lt;a target&#x3D;\&quot;_blank\&quot; href&#x3D;\&quot;https://docs.google.com/spreadsheets/d/1O3aueXSPOqo7Iuyz4PqDG6yZunHsX8BTefZ2kFk5pz4/edit?usp&#x3D;sharing\&quot;&gt;here&lt;/a&gt; | [optional] 


