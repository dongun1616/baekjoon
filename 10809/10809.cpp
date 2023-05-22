#include <iostream>
#include <string>

using namespace std;
int main()
{
    string W;
    cin >> W;
    string alp = "abcdefghijklmnopqrstuvwxyz";
    int a, b;
    
    for(a=0;a<alp.length();a++)
    {
        for(b=0;b<W.length();b++)
        {
            if(W[b] == alp[a])
            {
                cout << b << " ";         
                break;
            }
        }
        if(W[b] != alp[a])
        {
            cout << -1 << " ";
        }     
    }

    return 0;
}