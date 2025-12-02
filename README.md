# 中文字体精简版

基于**教育部《通用规范汉字表》**（8105 字）对常用开源中文字体进行子集化精简，大幅减小字体体积，适用于网页、小程序、嵌入式等对体积敏感的场景。

Live Demo: https://zanel1u.github.io/TTF-Min/

## ✨ 特性

- 📦 **体积大幅缩减**：精简后体积仅为原始字体的 15%~25%
- 📝 **字符覆盖全面**：包含《通用规范汉字表》8105 字 + 常用英文字符及标点符号
- 🔤 **多字体支持**：思源黑体、思源宋体、阿里巴巴普惠体、更纱黑体
- 🛠️ **开箱即用**：提供一键精简脚本，支持自定义字符集

## 📥 快速下载

> 💡 表格仅展示 Regular 字重，更多字重请查看 [`dist`](./dist) 目录

| 字体名称 | 文件名 | 原始大小 | 精简后 | 下载 |
|---------|--------|:-------:|:------:|:----:|
| 思源黑体 | SourceHanSansSC-Regular.ttf | 19M | 4.7M | [⬇️](https://github.com/ZaneL1u/TTF-Min/raw/main/dist/ttf-思源黑体/SourceHanSansSC-Regular.ttf) |
| 思源宋体 | SourceHanSerifCN-Regular.otf | 11M | 3M | [⬇️](https://github.com/ZaneL1u/TTF-Min/raw/main/dist/otf-思源宋体/SourceHanSerifCN-Regular.otf) |
| 阿里巴巴普惠体 | AlibabaPuHuiTi-3-55-Regular.ttf | 8.5M | 2.1M | [⬇️](https://github.com/ZaneL1u/TTF-Min/raw/main/dist/ttf%2Botf阿里巴巴普惠体/AlibabaPuHuiTi-3-55-Regular.ttf) |
| 阿里巴巴普惠体 | AlibabaPuHuiTi-3-55-Regular.otf | 7.4M | 1.9M | [⬇️](https://github.com/ZaneL1u/TTF-Min/raw/main/dist/ttf%2Botf阿里巴巴普惠体/AlibabaPuHuiTi-3-55-Regular.otf) |
| 更纱黑体 | SarasaGothicSC-Regular.ttf | 24M | 4.5M | [⬇️](https://github.com/ZaneL1u/TTF-Min/raw/refs/heads/main/dist/ttf-%E6%9B%B4%E7%BA%B1%E9%BB%91%E4%BD%93/SarasaGothicSC-Regular.ttf) |

> 🙋 想要其他开源字体？欢迎提 [Issue](https://github.com/ZaneL1u/TTF-Min/issues) 或 PR！

## 📁 目录结构

```
├── src/          # 原始字体文件
├── dist/         # 精简后的字体文件
├── content.txt   # 字符集（精简后字体包含的所有字符）
└── main.sh       # 一键精简脚本
```

## 🔧 自定义精简

如需自定义字符集或添加其他字体，可按以下步骤操作：

### 环境准备

```shell
# 安装 fonttools（需要 Python 3.6+）
pip install fonttools
```

### 使用方式

1. 克隆仓库到本地
2. 修改 `content.txt` 中的字符内容
3. 将原始字体放入 `src/` 目录下的子文件夹中
4. 运行精简脚本：

```shell
chmod +x main.sh  # 首次运行需添加执行权限
./main.sh
```

脚本会自动扫描 `src/` 下的所有 `.ttf` 和 `.otf` 文件，并将精简后的字体输出到 `dist/` 对应目录。

### 手动精简单个字体

```shell
pyftsubset input.otf --text-file=content.txt --output-file=output.otf
```

## 📜 字体许可证

本仓库所有字体均为**开源或免费商用**字体，精简操作符合各字体许可证规定。

| 字体 | 许可证 | 来源 |
|-----|--------|-----|
| 思源黑体 | [SIL OFL 1.1](https://scripts.sil.org/OFL) | [Adobe Fonts](https://github.com/adobe-fonts/source-han-sans) |
| 思源宋体 | [SIL OFL 1.1](https://scripts.sil.org/OFL) | [Adobe Fonts](https://github.com/adobe-fonts/source-han-serif) |
| 阿里巴巴普惠体 | [免费商用授权](https://www.alibabafonts.com/#/more) | [官网](https://www.alibabafonts.com/) |
| 更纱黑体 | [SIL OFL 1.1](https://scripts.sil.org/OFL) | [GitHub](https://github.com/be5invis/Sarasa-Gothic) |

> ⚠️ **声明**：本仓库仅对原始字体进行子集化处理，不改变原许可证条款。使用时请遵守原字体的许可协议。

## 📚 关于《通用规范汉字表》

《通用规范汉字表》是中华人民共和国教育部、国家语言文字工作委员会于 2013 年发布的汉字使用规范，共收录 **8105** 个汉字：

| 级别 | 字数 | 说明 |
|:---:|:---:|-----|
| 一级 | 3500 | 常用字集 |
| 二级 | 3000 | 次常用字 |
| 三级 | 1605 | 人名、地名、科技术语、文言文用字 |

📄 官方文档：[国务院《通用规范汉字表》PDF](http://www.gov.cn/gzdt/att/att/site1/20130819/tygfhzb.pdf)

## 🙏 致谢

- [@iizyd](https://github.com/iizyd) - [SourceHanSansCN-TTF-Min](https://github.com/iizyd/SourceHanSansCN-TTF-Min)（精简脚本）
- [@shengdoushi](https://github.com/shengdoushi) - [common-standard-chinese-characters-table](https://github.com/shengdoushi/common-standard-chinese-characters-table)（字表数据）
- [fonttools](https://github.com/fonttools/fonttools) - 字体处理工具