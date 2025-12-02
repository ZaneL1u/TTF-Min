## 字体精简（教育部《通用规范汉字表》版）

> Form 自 https://github.com/iizyd/SourceHanSansCN-TTF-Min
> 感谢 [@iizyd](https://github.com/iizyd) 提供脚本

> 文字数据来源：https://github.com/shengdoushi/common-standard-chinese-characters-table
> 感谢 [@shengdoushi](https://github.com/shengdoushi) 整理
>
> 《通用规范汉字表》是由中华人民共和国教育部、国家语言文字工作委员会联合组织研制的汉字使用规范，2013年6月5日正式颁布，成为社会一般应用领域的汉字规范。
>
> 字表共收字8105个，其中一级字表（常用字集）3500个，二级字表3000个，三级字表1605个。一、二级字表主要满足出版印刷、辞书编纂和信息处理等方面的一般用字需要；由姓氏人名、地名、科技术语和中小学教材常见文言文用字构成的三级字表则主要满足与大众生活密切相关的专门领域的用字需要需要。
>
> 为尊重大众用字习惯，《规范汉字表》恢复了45个主要用于人名和地名异体字，例如《瑷珲条约》的“珲”字等（吉林省珲春县一直使用这个字作为县名）。
>
> 国务院公布的《规范汉字表》PDF: http://www.gov.cn/gzdt/att/att/site1/20130819/tygfhzb.pdf

- 本仓库中精简的字体如下：
  - 思源宋体 otf
  - 思源黑体 ttf
  - 阿里巴巴普惠体 otf + ttf
  - 更纱黑体 ttf
- 字体数据仅包含基础常用的中文、英文字符及符号
- 字体内容根据 **教育部《通用规范汉字表》** （共 8105 字）进行了精简，相较 3500 常用字版，体积略微增大。


## 概览
| 名称 | 文件 | 原始 | 3500 字版 | 《通用规范汉字表》版 | 下载 |
|------|---------------------------|---------|-----------|--------|------|
| 思源黑体 Regular |SourceHanSansSC-Regular.ttf| 19M | 1.9M | 4.7M | [下载](https://github.com/iizyd/SourceHanSansCN-TTF-Min/raw/main/dist/ttf-思源黑体/SourceHanSansSC-Regular.ttf) |
| 思源宋体 Regular |SourceHanSerifCN-Regular.otf| 11M | 1.2M | 3M | [下载](https://github.com/iizyd/SourceHanSansCN-TTF-Min/raw/main/dist/otf-思源宋体/SourceHanSerifCN-Regular.otf) |
| 阿里巴巴普惠体 Regular |AlibabaPuHuiTi-3-55-Regular.ttf| 8.5M | 858KB | 2.1M | [下载](https://github.com/iizyd/SourceHanSansCN-TTF-Min/raw/main/dist/ttf%2Botf阿里巴巴普惠体/AlibabaPuHuiTi-3-55-Regular.ttf) |
| 阿里巴巴普惠体 Regular |AlibabaPuHuiTi-3-55-Regular.otf| 7.4M | 782KB | 1.9M | [下载](https://github.com/iizyd/SourceHanSansCN-TTF-Min/raw/main/dist/ttf%2Botf阿里巴巴普惠体/AlibabaPuHuiTi-3-55-Regular.otf) |
| 更纱黑体 Regular |SarasaGothicSC-Regular.ttf| 24M | - | 4.5M |  |

表格仅展示了已精简的各字体 Regular 字重，方便下载。

其余精简后的字体文件见 `dist` 目录。


## 文件及目录
- `src` 字体源文件
- `dist` 精简后的字体文件
- `content.txt` 压缩字体所需（字体要包含的数据内容）
- `main.sh` 压缩字体的脚本
  - 会自动查找 `src` 目录下的**一级**子目录及原始字体文件（识别otf和ttf）
  - 根据 `content.txt` 文件中的内容进行压缩
  - 将压缩后的字体保存到 `dist` 下对应的目录中


## 提取工具 `fonttools-pyftsubset` 
- `fonttools-pyftsubset` 支持 `ttf` 和 `otf` 的转换
- `Python pip` 安装即可 - [Github](https://github.com/fonttools/fonttools)

- 参考[字体裁剪与精简](https://tamshen.com/archives/20210913.html)
```shell
# 使用环境：Python ( 工具4.x版本需要 Python 3.6+)
# 实际使用过程注意 python3 pip3 等前缀

pip install fonttools
pyftsubset 1.otf --text-file=1.txt --output-file=2.otf

# 1.otf 要被裁剪精简的字体文件
# --text-file=1.txt 裁剪的字体中保留 1.txt 这个文档中的所有字符
# --output-file= 将裁剪后的字体保存为 2.otf
```

## 二次精简
1. 需要二次精简或自行操作时，可将此仓库克隆至本地，并按如上提示安装好`Python`和`fonttools`等基础环境。
2. 更新`content.txt`文件中的内容
3. 执行`main.sh`

**提示**
1. 如遇`main.sh`执行权限的问题，可尝试先执行`chmod +x main.sh`命令
2. 如果是新增其它字体或字体文件，可在`src`目录下新建文件夹，并将字体文件放至此文件夹中，重新执行`main.sh`

## 包含的字体数据

见：[所有文字](./content.txt)
