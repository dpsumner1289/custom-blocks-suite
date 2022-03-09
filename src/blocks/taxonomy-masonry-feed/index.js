const { useState } = wp.element
const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
import React from "react"
import { getIndustryList, getTopicList } from "../../data/taxonomy"
import { getFilteredPosts, getMedia } from "../../data/posts"
import TaxonomySelect from "../../components/TaxonomySelect"
import SelectTaxonomy from "../../components/SelectTaxonomy"
import TaxGrid from "../../components/TaxGrid/"

import "./editor.scss"
import "./style.scss"
import "./responsive.scss"
import ScrollPicker from "../../components/ScrollPicker"

registerBlockType("ctct-bcb/tax-masonry-feed", {
  title: __("Home – Taxonomy Masonry Feed"),
  icon: "yes-alt",
  category: "common",

  edit: props => {
    const { attributes, setAttributes } = props
    const [terms, setTerms] = useState([])
    const [posts, setPosts] = useState([])
    const [term, setTerm] = useState(null)
    const [tax, setTax] = useState(null)
    const [taxTitle, setTaxTitle] = useState("")
    const [loading, setLoading] = useState(true)
    const setTermsAndLoad = (list, taxTitle, tax) => {
      setTax(tax)
      setTerms(list)
      setTaxTitle(taxTitle)
      setLoading(false)
    }
    const getTermsList = async taxType => {
      if (taxType === "industry") {
        return getIndustryList().then(list => {
          setTermsAndLoad(list, "Marketing Advice by Industry:", "industry")
          setAttributes({
            termList: list,
            selectedTax: "industry",
            curTaxTitle: "Marketing Advice by Industry:",
          })
        })
      } else if (taxType === "topic") {
        return getTopicList().then(list => {
          setTermsAndLoad(list, "Marketing Advice by Topic:", "categories")
          setAttributes({
            termList: list,
            selectedTax: "categories",
            curTaxTitle: "Marketing Advice by Topic:",
          })
        })
      }
    }
    const getPostsByTerms = async (endpoint, term) => {
      setTerm(term)
      return getFilteredPosts({ rest: endpoint, tax: tax }).then(posts => {
        setPosts(posts)
        setAttributes({ posts: posts, selectedTerm: term })
      })
    }
    const setSlideAttributes = atts => {
      setAttributes({ slideAtts: atts })
    }
    const selectTaxProps = {
      selected:
        { value: attributes.selectedTax, title: attributes.curTaxTitle } ||
        false,
      onChange: getTermsList,
    }
    const taxProps = {
      terms: attributes.termList || terms,
      taxType: attributes.curTaxTitle || taxTitle,
      selectedTerm: attributes.selectedTerm || false,
      onChange: getPostsByTerms,
    }
    const gridProps = {
      posts: attributes.posts || posts,
      tax: attributes.selectedTax || tax,
    }
    const gridPropsServer = {
      posts:
        posts ||
        attributes.posts.map(post => {
          return {
            id: post.id,
            title: post.title.rendered,
            link: post.link,
            author: post.author,
            image: post._links["wp:featuredmedia"][0].href,
          }
        }),
      tax: attributes.selectedTax || tax,
    }
    const slideProps = {
      terms: attributes.termList || terms,
      type: tax,
      active: false,
      selectedTerm: attributes.selectedTerm || term,
    }
    const JSONprops = {
      selectTaxProps: selectTaxProps,
      taxProps: taxProps,
      slideProps: slideProps,
      gridProps: gridPropsServer,
    }
    const markup = (
      <div>
        <SelectTaxonomy {...selectTaxProps} />
        <section className="taxFeed-block-wrap flex col afs jfs">
          <TaxonomySelect {...taxProps} />
          <ScrollPicker {...slideProps} />
          <TaxGrid {...gridProps} />
        </section>
      </div>
    )
    setAttributes({ markup: JSON.stringify(JSONprops) })
    return markup
  },

  save: props => null,
})
