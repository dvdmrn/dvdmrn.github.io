from scholarly import scholarly


def Publication(authors, title, date, venue) -> dict:
    d = {
        "authors":authors,
        "title": title,
        "date": date,
        "venue": venue
    }
    return d
# Retrieve the author's data, fill-in, and print
# Get an iterator for the author results
search_query = scholarly.search_author_id('dLgup7MAAAAJ')
# Retrieve the first result from the iterator
print(search_query)
# first_author_result = next(search_query)
# print(dict(first_author_result))
# dLgup7MAAAAJ

# Retrieve all the details for the author
author = scholarly.fill(search_query)
# scholarly.pprint(author)

# Take a closer look at the first publication
pubs = author['publications']




publication_array = []
for pub in pubs:
    pub = scholarly.search_single_pub(pub["bib"]["title"])["bib"]
    print("FOUND PUB!")
    print(pub)
    author = pub["author"]
    title = pub["title"]
    date = pub["pub_year"]
    venue = pub["venue"]
    publication_array.append(Publication(author,title,date,venue))

print(publication_array)
exit()
pu = scholarly.search_single_pub(first_publication[0]["bib"]["title"])
print(pub["bib"]["author"])

print("0000000000000000000000")
print(f"pub length: {len(first_publication)}")
exit()
# pub = Publication(first_publication[])


print(first_publication)
# first_publication_filled = scholarly.fill(first_publication)
# scholarly.pprint(first_publication_filled)
exit()
# Print the titles of the author's publications
publication_titles = [pub['bib']['title'] for pub in author['publications']]
print(publication_titles)